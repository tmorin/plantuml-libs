# Adobeaudition


```text
simpleicons-5/A/Adobeaudition
```

```text
include('simpleicons-5/A/Adobeaudition')
```



| Illustration | Adobeaudition |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Adobeaudition.png) | ![illustration for Adobeaudition](../../simpleicons-5/A/Adobeaudition.Local.png) |




## Adobeaudition

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adobeaudition
include('simpleicons-5/A/Adobeaudition')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adobeaudition
include('simpleicons-5/A/Adobeaudition')

' renders the element
Adobeaudition('Adobeaudition', 'Adobeaudition', 'an optional tech label')
@enduml
```

