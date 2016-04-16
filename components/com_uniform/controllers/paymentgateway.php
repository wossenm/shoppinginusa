<?php

/**
 * @version     $Id: forms.php 19014 2012-11-28 04:48:56Z thailv $
 * @package     JSNUniform
 * @subpackage  Controller
 * @author      JoomlaShine Team <support@joomlashine.com>
 * @copyright   Copyright (C) 2015 JoomlaShine.com. All Rights Reserved.
 * @license     GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Websites: http://www.joomlashine.com
 * Technical Support:  Feedback - http://www.joomlashine.com/contact-us/get-support.html
 */
defined('_JEXEC') or die('Restricted access');
/**
 * Forms controllers of JControllerForm
 * 
 * @package     Controllers
 * @subpackage  Forms
 * @since       1.6
 */
class JSNUniformControllerPaymentgateWay extends JSNBaseController
{
	public function __construct($config = array())
	{
		// Get input object
		$this->input = JFactory::getApplication()->input;

		parent::__construct($config);
	}
	

	/**
	 *  view select form
	 * 
	 * @return html code
	 */
	public function postback()
	{
		$post 		= $this->input->getArray($_POST);
		$method 	= $this->input->getCmd('method');
		$secretKey 	= $this->input->getCmd('secret_key');
		$formID 	= $this->input->getCmd('form_id');
		
		$config 	= JFactory::getConfig();
		$secret 	= $config->get('secret');
		$return 	= new stdClass;
		
		$return->actionForm = "";
		$return->actionFormData = '';
		
		if (md5($secret) != $secretKey)
		{
			$this->setRedirect('index.php', JText::_('JSN_UNIFORM_SECRET_KEY_INVALID'), 'error');
			return false;
		}	
		
		if (JPluginHelper::isEnabled('uniform', (string) $method) !== true)
		{
			$this->setRedirect('index.php',  JText::sprintf('JSN_UNIFORM_PLUGIN_IS_NOT_EXISTED_OR_ENABLED', strtoupper(str_replace('_', ' ', (string) $method))), 'error');
			return false;
		}
		
		$model 		= $this->getModel('paymentgateway');
		$dataForms 	= $model->getDataForm($formID);

		if (!count($dataForms))
		{
			$this->setRedirect('index.php',  JText::_('JSN_UNIFORM_FORM_IS_NOT_EXISTED'), 'error');
			return false;
		}
		$model->getActionForm($dataForms->form_post_action, $dataForms->form_post_action_data, $return);

		$dispatcher 			= JEventDispatcher::getInstance();
		JPluginHelper::importPlugin('uniform', (string) $method);
		$isValidPaymentGateway 	= $dispatcher->trigger('verifyGatewayResponse', array($post));
		
		if ($isValidPaymentGateway[0] == false)
		{
			$this->setRedirect('index.php', JText::_('JSN_UNIFORM_PURCHASED_UNSUCCESFULLY'), 'error');
			return false;
		}
		else
		{
			if ($return->actionForm == 'url')
			{
				header('Location: ' . $return->actionFormData);
				return true;
			}
			elseif ($return->actionForm == 'message')
			{
				$this->setRedirect('index.php', strip_tags($return->actionFormData));
				return true;
			}
			else 
			{
				$this->setRedirect('index.php', JText::_('JSN_UNIFORM_PURCHASED_SUCCESFULLY'));
				return true;
			}
		}		
		
		$this->setRedirect('index.php');
		return true;
	}
}
