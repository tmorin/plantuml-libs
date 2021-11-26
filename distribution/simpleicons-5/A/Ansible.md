# Ansible


```text
simpleicons-5/A/Ansible
```

```text
include('simpleicons-5/A/Ansible')
```



| Illustration | Ansible |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Ansible.png) | ![illustration for Ansible](../../simpleicons-5/A/Ansible.Local.png) |




## Ansible

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ansible
include('simpleicons-5/A/Ansible')

' renders the element
Ansible('Ansible', 'Ansible', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ansible
include('simpleicons-5/A/Ansible')

' renders the element
Ansible('Ansible', 'Ansible', 'an optional tech label')
@enduml
```

