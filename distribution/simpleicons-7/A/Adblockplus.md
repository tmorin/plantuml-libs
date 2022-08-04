# Adblockplus


```text
simpleicons-7/A/Adblockplus
```

```text
include('simpleicons-7/A/Adblockplus')
```



| Illustration | Adblockplus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Adblockplus.png) | ![illustration for Adblockplus](../../simpleicons-7/A/Adblockplus.Local.png) |




## Adblockplus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Adblockplus
include('simpleicons-7/A/Adblockplus')

' renders the element
Adblockplus('Adblockplus', 'Adblockplus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adblockplus
include('simpleicons-7/A/Adblockplus')

' renders the element
Adblockplus('Adblockplus', 'Adblockplus', 'an optional tech label', 'an optional description')
@enduml
```

