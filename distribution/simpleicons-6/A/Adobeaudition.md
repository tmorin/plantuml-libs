# Adobeaudition


```text
simpleicons-6/A/Adobeaudition
```

```text
include('simpleicons-6/A/Adobeaudition')
```



| Illustration | Adobeaudition |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Adobeaudition.png) | ![illustration for Adobeaudition](../../simpleicons-6/A/Adobeaudition.Local.png) |




## Adobeaudition

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Adobeaudition
include('simpleicons-6/A/Adobeaudition')

' renders the element
Adobeaudition('Adobeaudition', 'Adobeaudition', 'an optional tech label')
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

' loads the Item which embeds the element Adobeaudition
include('simpleicons-6/A/Adobeaudition')

' renders the element
Adobeaudition('Adobeaudition', 'Adobeaudition', 'an optional tech label')
@enduml
```

