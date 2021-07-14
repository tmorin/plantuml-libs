# Adblockplus


```text
simpleicons-5/A/Adblockplus
```

```text
include('simpleicons-5/A/Adblockplus')
```



| Illustration | Adblockplus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Adblockplus.png) | ![illustration for Adblockplus](../../simpleicons-5/A/Adblockplus.Local.png) |




## Adblockplus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adblockplus
include('simpleicons-5/A/Adblockplus')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adblockplus
include('simpleicons-5/A/Adblockplus')

' renders the element
Adblockplus('Adblockplus', 'Adblockplus', 'an optional tech label')
@enduml
```

