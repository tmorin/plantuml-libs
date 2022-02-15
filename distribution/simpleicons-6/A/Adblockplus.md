# Adblockplus


```text
simpleicons-6/A/Adblockplus
```

```text
include('simpleicons-6/A/Adblockplus')
```



| Illustration | Adblockplus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Adblockplus.png) | ![illustration for Adblockplus](../../simpleicons-6/A/Adblockplus.Local.png) |




## Adblockplus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Adblockplus
include('simpleicons-6/A/Adblockplus')

' renders the element
Adblockplus('Adblockplus', 'Adblockplus', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Adblockplus
include('simpleicons-6/A/Adblockplus')

' renders the element
Adblockplus('Adblockplus', 'Adblockplus', 'an optional tech label')
@enduml
```

