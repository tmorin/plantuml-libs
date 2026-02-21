# Blackberry


```text
fontawesome/Brands/Blackberry
```

```text
include('fontawesome/Brands/Blackberry')
```



| Illustration | Blackberry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Blackberry.png) | ![illustration for Blackberry](../../fontawesome/Brands/Blackberry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlackberryXs>`
- `<$BlackberrySm>`
- `<$BlackberryMd>`
- `<$BlackberryLg>`





## Blackberry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Blackberry
include('fontawesome/Brands/Blackberry')

' renders the element
Blackberry('Blackberry', 'Blackberry', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Blackberry
include('fontawesome/Brands/Blackberry')

' renders the element
Blackberry('Blackberry', 'Blackberry', 'an optional tech label', 'an optional description')
@enduml
```

