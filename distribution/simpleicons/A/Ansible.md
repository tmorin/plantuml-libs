# Ansible


```text
simpleicons/A/Ansible
```

```text
include('simpleicons/A/Ansible')
```



| Illustration | Ansible |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Ansible.png) | ![illustration for Ansible](../../simpleicons/A/Ansible.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnsibleXs>`
- `<$AnsibleSm>`
- `<$AnsibleMd>`
- `<$AnsibleLg>`





## Ansible

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ansible
include('simpleicons/A/Ansible')

' renders the element
Ansible('Ansible', 'Ansible', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ansible
include('simpleicons/A/Ansible')

' renders the element
Ansible('Ansible', 'Ansible', 'an optional tech label', 'an optional description')
@enduml
```

