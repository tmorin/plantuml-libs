# Fastlane


```text
simpleicons-5/F/Fastlane
```

```text
include('simpleicons-5/F/Fastlane')
```



| Illustration | Fastlane |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fastlane.png) | ![illustration for Fastlane](../../simpleicons-5/F/Fastlane.Local.png) |




## Fastlane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fastlane
include('simpleicons-5/F/Fastlane')

' renders the element
Fastlane('Fastlane', 'Fastlane', 'an optional tech label')
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

' loads the Item which embeds the element Fastlane
include('simpleicons-5/F/Fastlane')

' renders the element
Fastlane('Fastlane', 'Fastlane', 'an optional tech label')
@enduml
```

