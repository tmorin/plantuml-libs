# Joomla


```text
fontawesome/Brands/Joomla
```

```text
include('fontawesome/Brands/Joomla')
```



| Illustration | Joomla |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Joomla.png) | ![illustration for Joomla](../../fontawesome/Brands/Joomla.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JoomlaXs>`
- `<$JoomlaSm>`
- `<$JoomlaMd>`
- `<$JoomlaLg>`





## Joomla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Joomla
include('fontawesome/Brands/Joomla')

' renders the element
Joomla('Joomla', 'Joomla', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Joomla
include('fontawesome/Brands/Joomla')

' renders the element
Joomla('Joomla', 'Joomla', 'an optional tech label', 'an optional description')
@enduml
```

