# FonticonsFi


```text
fontawesome/Brands/FonticonsFi
```

```text
include('fontawesome/Brands/FonticonsFi')
```



| Illustration | FonticonsFi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/FonticonsFi.png) | ![illustration for FonticonsFi](../../fontawesome/Brands/FonticonsFi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FonticonsFiXs>`
- `<$FonticonsFiSm>`
- `<$FonticonsFiMd>`
- `<$FonticonsFiLg>`





## FonticonsFi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FonticonsFi
include('fontawesome/Brands/FonticonsFi')

' renders the element
FonticonsFi('FonticonsFi', 'Fonticons Fi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FonticonsFi
include('fontawesome/Brands/FonticonsFi')

' renders the element
FonticonsFi('FonticonsFi', 'Fonticons Fi', 'an optional tech label', 'an optional description')
@enduml
```

