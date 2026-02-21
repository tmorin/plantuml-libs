# Screwdriver


```text
fontawesome/Solid/Screwdriver
```

```text
include('fontawesome/Solid/Screwdriver')
```



| Illustration | Screwdriver |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Screwdriver.png) | ![illustration for Screwdriver](../../fontawesome/Solid/Screwdriver.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScrewdriverXs>`
- `<$ScrewdriverSm>`
- `<$ScrewdriverMd>`
- `<$ScrewdriverLg>`





## Screwdriver

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Screwdriver
include('fontawesome/Solid/Screwdriver')

' renders the element
Screwdriver('Screwdriver', 'Screwdriver', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Screwdriver
include('fontawesome/Solid/Screwdriver')

' renders the element
Screwdriver('Screwdriver', 'Screwdriver', 'an optional tech label', 'an optional description')
@enduml
```

