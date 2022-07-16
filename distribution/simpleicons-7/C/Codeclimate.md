# Codeclimate


```text
simpleicons-7/C/Codeclimate
```

```text
include('simpleicons-7/C/Codeclimate')
```



| Illustration | Codeclimate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Codeclimate.png) | ![illustration for Codeclimate](../../simpleicons-7/C/Codeclimate.Local.png) |




## Codeclimate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Codeclimate
include('simpleicons-7/C/Codeclimate')

' renders the element
Codeclimate('Codeclimate', 'Codeclimate', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Codeclimate
include('simpleicons-7/C/Codeclimate')

' renders the element
Codeclimate('Codeclimate', 'Codeclimate', 'an optional tech label')
@enduml
```

