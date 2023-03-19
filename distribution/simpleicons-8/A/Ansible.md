# Ansible


```text
simpleicons-8/A/Ansible
```

```text
include('simpleicons-8/A/Ansible')
```



| Illustration | Ansible |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Ansible.png) | ![illustration for Ansible](../../simpleicons-8/A/Ansible.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ansible
include('simpleicons-8/A/Ansible')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ansible
include('simpleicons-8/A/Ansible')

' renders the element
Ansible('Ansible', 'Ansible', 'an optional tech label', 'an optional description')
@enduml
```

