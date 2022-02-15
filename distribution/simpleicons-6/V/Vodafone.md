# Vodafone


```text
simpleicons-6/V/Vodafone
```

```text
include('simpleicons-6/V/Vodafone')
```



| Illustration | Vodafone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Vodafone.png) | ![illustration for Vodafone](../../simpleicons-6/V/Vodafone.Local.png) |




## Vodafone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vodafone
include('simpleicons-6/V/Vodafone')

' renders the element
Vodafone('Vodafone', 'Vodafone', 'an optional tech label')
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

' loads the Item which embeds the element Vodafone
include('simpleicons-6/V/Vodafone')

' renders the element
Vodafone('Vodafone', 'Vodafone', 'an optional tech label')
@enduml
```

