# Vodafone


```text
simpleicons-7/V/Vodafone
```

```text
include('simpleicons-7/V/Vodafone')
```



| Illustration | Vodafone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vodafone.png) | ![illustration for Vodafone](../../simpleicons-7/V/Vodafone.Local.png) |




## Vodafone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vodafone
include('simpleicons-7/V/Vodafone')

' renders the element
Vodafone('Vodafone', 'Vodafone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vodafone
include('simpleicons-7/V/Vodafone')

' renders the element
Vodafone('Vodafone', 'Vodafone', 'an optional tech label', 'an optional description')
@enduml
```

