# EventStorming

Library implementing elements highly inspired by [EventStorming](https://www.eventstorming.com).

## Install

To include every thing:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/eventstorming/eventstorming-all.puml
@enduml
```

To override constants (font size, colors):
```plantuml
@startuml
' load the macros and constants
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/eventstorming/eventstorming-macros.puml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/eventstorming/eventstorming-constants.puml
' user override of the constants
!define FONT_SIZE_NORMAL 20
!define FONT_SIZE_SMALL 15
!define FONT_COLOR_NORMAL navy
!define COMMAND_COLOR_BG pink
!define EVENT_COLOR_BG yellow
' load the styles
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/eventstorming/eventstorming-styles.puml
command(command, A command)
event(event, An event)
command -> event : produces
@enduml
```

![override of constants](http://plantuml.com/plantuml/png/lLBBJiCm4BptAvPJMud4WCIb1wHG0aBAGseH1owL6syR2pyYFrBbxp596b69So_sUcTdnvxr78Ic35oD86bbj0Mg65HQMKULixCRhYhX6NeZe7QkiIj233t5H-vgl_SMJQXrg5nSQKcSr8OhqeZ0zL94WkyjaTGwD0JRK6MTDfAhu-Kf6gJZ9d2kf3YzS12TmszZq2qQmnc2FlIM_F61uO4hXDUo-DXjtx_INL5kyYI3Xxj_i6r0ChX_l8JMPLPkpZn5ssw2rsMU9yNBMF7y1WrNtnEQVgOJEs0T2g5FuShJvAph15vhLeFOO5le8yD_MOpxBIGmXijPprhqQyWhwAFbcGBHqv215JH6Cr-X_G40)

## Elements

The `person` and `system`:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/eventstorming/eventstorming-all.puml
person(person, a person)
system(system, a system)
@enduml
```

![person and system](http://plantuml.com/plantuml/png/LOnB3i8m34JtFKNOjHADzzmc3LORoNOYsm5nUuAoOZLlD9zRaKpzYLqfNExD7W2Qtl4iVlMZ6sgkuYWUSsLmhbe46YNnphHJEGmucQC2laRBl2eNEV_TdeXY6uEbeLgLTSezf31fM-mpJdYTyWicRLy0)

The `facade_command` and `command`:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/eventstorming/eventstorming-all.puml
facade_command(facade_command, a facade command)
command(command, a command)
@enduml
```

![commands](http://plantuml.com/plantuml/png/LOn13i8m30JlVKMuWKJZEvz1RcBQI8uJEGvylv6W4ZtkxEnUaWJkaRgosyngUm0eVloQREjBRwIXY96O3oM3vQ99e3AAzSmpfwL1ncQaGEzXDIkQawpdD2EphsCmlJ1WfEVuoYZnUevtX-vBt8_SfiFyKuvk1m00)

The `aggregate`, `event`, `domain_event` and `integration_event`:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/eventstorming/eventstorming-all.puml
aggregate(aggregate, an aggregate)
event(event, an event)
domain_event(domain_event, a domain event)
integration_event(integration_event, an integration event)
@enduml
```

![aggregate and events](http://plantuml.com/plantuml/png/POxD2eCm3CVlFaLtKvZjVIypeeOQQ5D9q-trL-eKnouXl_z7o8ru3cN18i6igbj-E2VmjfvqBLF9A7DYHLOxf-Wq9Y5sMm3M4iCOQCekGbOKXw-Qofea4ljV6Y44kzL21zuBUb3ip-rkWCr9GzUQVPlDQjlGBIa2yNDthr13PkSZIlLXBw2KZloVqYvVr6_r0m00)

The `read_model`, `query` and `user_interface`:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/eventstorming/eventstorming-all.puml
read_model(read_model, a read model)
query(query, a query)
user_interface(user_interface, a user interface)
@enduml
```

![projections](http://plantuml.com/plantuml/png/LOvB3iCW34Jtd8Bk4ga9-rucSi1DaCodnZJgxGjPjCh6cZSpbkRcewNgi3BfNIINXp4CnxnvsUjQ2x9DKJ3AR5Cm4XBxQ391b1fe8hyM4w08ii5tQnL977pShZG1qPpRWs84juJaa8Q_l6lGdVH9etfLvCzmtXwTObHzo-BR5dw2nU6AlTST_NF6Bm00)

The `policy`, `process`, `saga`, `service` and `timer`:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/eventstorming/eventstorming-all.puml
policy(policy, a policy)
process(process, a process)
saga(saga, a saga)
service(service, a service)
timer(timer, a timer)
@enduml
```

![logic](http://plantuml.com/plantuml/png/LOjB3iCm20NtEKMwiwKctlSsZeiI9FmHu5IzVMCxcswOuJruO0fKtr2PvaEroCivzfzrHptgLWKuvAIGT0qvEesPCRb2FccDj11kug8N1NPmNbUYcIEc_NzRFD5QheUfPCBmDGFFsS_3x5Gu1n0nDtirr4xYTs_QQ6dZ5G6V6C3SxCLGEob6ODDdoxlO7m00)

The `comment`:
```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/eventstorming/eventstorming-all.puml
comment(comment)
@enduml
```

![comment](http://plantuml.com/plantuml/png/LOmx3iCm34FtdgBTsY7Mdjiuhf08a6H3d_RwyP0b4q4yFhv86-SNq_XvH0nV0Qp-oqvnv9QErhe6QfJM1KAwaSBWgf722zFc8DK33V0tLnxTX7I_jwKobp65npoH2TvNVau0)

## Example from the book

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/eventstorming/eventstorming-all.puml

system(system)
command(command1, command)
aggregate(aggregate)
domain_event(domain_event, domain event)
read_model(read_model, read model)
user_interface(user_interface, user interface)
command(command2, command)
policy(policy)
person(person)

command1 --> aggregate : invoked on
command1 --> system : invoked on
aggregate --> domain_event : generates
system --> domain_event : generates
domain_event --> read_model : translated into
read_model --> user_interface : displayed by
domain_event --> policy : triggers
policy --> command2 : invokes
person --> command2 : invokes
person -l-> user_interface : used by
@enduml
```

![example from the book](http://plantuml.com/plantuml/png/XPBBRiGW34NtV0NTWPG4JPUpwA-CI70PL1uHaAdozpKXauUcQbVsZG-MxrNUZ1_if62Abjvp7jDLY2Y_EstoVUgd1748FeFFtH2So2v4uyLefS-JiwqrVH9EfWnHm0Efb4DqnkkpQgMrtOWF24apmexLmWakTT8hjjPBGzUE4wbr12qpiAtZH0KdZRyjszbHDBGgkYXE8aXrSq61PNlRqDBJfUUacBiPD1S_vG3iB1jQDDtqowdlXrF7OCqmirfGGap1ireuURwyqBRze9iPUiNjZ_05YWP_PcewPs1_LuYZTUGqU8WuIsk-VpEdGI7tX93BKVfa4LJ5VJWakR3dc91N9k7_C2FUpw-hQoRBMgCr9hA6jGoVKMvEqvhTVrFxso7ueTpm0m00)

## Causality chain

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/eventstorming/eventstorming-all.puml

person(person)
system(system)
service(service)
facade_command(facade_command, facade command)
command(command)
aggregate(aggregate)
domain_event(domain_event, domain event)
timer(timer, every week)
integration_event(integration_event, integration event)
process(process)

person --> facade_command : invokes
system --> facade_command : invokes
facade_command --> service : 1. uses
facade_command -> command : 2. invokes
command -> domain_event : generates
command .u. aggregate : invoked on
domain_event -> process : starts
process -> integration_event : publishes
timer -u-> process : ends
@enduml
```

![causality chain](http://plantuml.com/plantuml/png/VP7BRiCW44NtVCLqXoKRgrrcaL-9Y3qbA3mi1XBbxpj-rcwaRZo-m-72N3viw5pfiIG7jvm7EhLjqazbRBwLQo5CNGmPGrPTz6tsCTdG3aw7NBnhdBrIwpLbJ2q-cA8SaxV175MZdLC3Rn1Ym4GnoBbKWbwyrykviCJqi1tAfLRYMtUwnmkVxNNevL7MC6jOT2LMRcjeOn8QdL5kVvNeezSsNAOhohseOLOmgKfawp79wLkFlVI29-Az4fOZCKbd6rURjquDkzPgEAJO8P5SQhNc0KrpXkDmS6A3HxmZBI7zp_nP6DabH8O-5V1BlaDd-3NwKflNRdsV3aC60_94EqOL1LkqstrwYE4Gy-Yr3CqGPPqohMcCQs_nCJMKgxDquyEc5u2c74mmzFG3)

## Hoozbuzzing cases

```plantuml
@startuml
!includeurl https://raw.githubusercontent.com/tmorin/plantuml-libs/master/eventstorming/eventstorming-all.puml

LAYOUT_WITH_LEGEND

facade_command(SubmitMoment, Submit Moment)
command(CreateMoment, Create Moment)
event(MomentCreated, Moment Created)
aggregate(Moment)
aggregate(Notification)
saga(WelcomeNotifier) [
    Welcome Notifier
    --description--
    1. generates the content of the notification
    2. creates the notification
]
command(CreateNotification, Create Notification)
event(NotificationCreated, Notification Created)
comment(EmailSenderComment) [
    When the service failed, the process retries for a maximum of three attempts. The delay between each retry must be at least 1 hours.
]
saga(EmailSender) [
    E-mail Sender
    --description--
    1. generates and sends the e-mail
    2. when the send is OK, flag the notification sent
    3. when the send is KO, flag the notification not sent
]
service(EmailService) [
    E-Mail Service
    --description--
    The service sending the e-mails.
]
command(FlagNotificationSent, Flag Notification Sent)
event(NotificationSent, Notification Sent)
command(FlagNotificationNotSent, Flag Notification Not Sent)
event(NotificationNotSent, Notification Not Sent)
query(GetWelcomeNotificationContent, Get Welcome Notification Content)

SubmitMoment --> CreateMoment : triggers
CreateMoment .l. Moment : invoked on
CreateMoment --> MomentCreated : produces

MomentCreated --> WelcomeNotifier : starts
WelcomeNotifier -l-> GetWelcomeNotificationContent : 1.1 asks
WelcomeNotifier --> CreateNotification : 2.1 triggers
CreateNotification -> NotificationCreated : produces
NotificationCreated -u-> WelcomeNotifier : 2.2 ends

NotificationCreated -> EmailSender : starts
EmailSender -r-> EmailService : 1. uses
EmailSender --> FlagNotificationSent : 2.1 sends
FlagNotificationSent -> NotificationSent : produces
NotificationSent -u-> EmailSender : 2.2 ends
EmailSender --> FlagNotificationNotSent : 3.1 sends
FlagNotificationNotSent -> NotificationNotSent : produces
NotificationNotSent -u-> EmailSender : 3.2 ends
EmailSender .u. EmailSenderComment

CreateNotification .. Notification : invoked on
FlagNotificationSent .. Notification : invoked on
FlagNotificationNotSent .. Notification : invoked on
@enduml
```

![submit a moment](http://plantuml.com/plantuml/png/bLLDRzim3BthLt2t18WLfBtrK63eicxero4PYc4O2iLc7A6sd4bok_xxqP8_PCVkjfn2yZsHZoBb3rB5MPbWgJCuM7iq5ykb5gyybVPGxag3EYwKHMLvNEHBcnTQgkKn4ygMUHPbScUMkJ0MzH9V26LieNEfqhuLYIpZHo8mTlln-yEtxTFZr-sNfzlrzVh-4sDx4Oi4doX1BbGosvIxNDgx8gSJ5k0jyEQSDQ0hZS9Y0_9M2tB9PzxoeMHH1sjeCcSYJJMcz7_Mq3hFVM7bNiR2oaBDcH6fc3rYHhdHHr3FuGS3-jLkQFpE6KK9cbZBOyMF8kTRSKXHeQRZ3TW3GjrNAFREL45AHpZZ4BjQpMdyvw0FORrjD_eYV4z2NzkPqDdrfyfGKTQvaDa6LOBwohjQxGTKhZQQaXSP8-m9MHrO-OwwYD4Oq6Yr90txGeE0NFoMUPbxqHeHXBMO7wtXi2LIWfbuWntQLwIZKSG7nt-3l3IM_0I736dUO0M7ejI6KolSzGHLDkMjeye7tlblzq8T9J4gyIr7Tq1p6Q-TMa990myt2zXd8ZsvdWfX7UryX7RpC4KZmrD9a-ze8yiPdQuxhyjv9uLjWukfSjCU1gfSvveX-apbX4EmSKjLUVkpiGcswnG_0frAGF-dSf0ncQUbJJ1-bQZVPjTeUyjQJxjVjmLGUB2rpUHxn9ony0MYtbv2-Dh01T14fobgmtf-dd5e8LAz5C-O02rh3rITrdkO24khafIqB8pr8nLsyEmGsbYXhM73G9GH-btfn5tn5GZpFC9kHVPQSa63lnhAxI68D_AcXAB6mb4vAksCdq6rVMoST0d1bdUT29sHxb1-z2lHGD-n0OvWOrDVAtPl01i530JNf56r7b-UrDtA_5j5zRmJvNoog0OpgAkZZfRMiawhEn-hZfSSJZy4R6mYE8V130MxCDhI_s8qbRz7-WC0)
