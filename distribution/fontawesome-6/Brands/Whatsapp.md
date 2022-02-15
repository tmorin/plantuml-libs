# Whatsapp


```text
fontawesome-6/Brands/Whatsapp
```

```text
include('fontawesome-6/Brands/Whatsapp')
```



| Illustration | Whatsapp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Whatsapp.png) | ![illustration for Whatsapp](../../fontawesome-6/Brands/Whatsapp.Local.png) |




## Whatsapp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Whatsapp
include('fontawesome-6/Brands/Whatsapp')

' renders the element
Whatsapp('Whatsapp', 'Whatsapp', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Whatsapp
include('fontawesome-6/Brands/Whatsapp')

' renders the element
Whatsapp('Whatsapp', 'Whatsapp', 'an optional tech label')
@enduml
```

