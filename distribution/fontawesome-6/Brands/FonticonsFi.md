# FonticonsFi


```text
fontawesome-6/Brands/FonticonsFi
```

```text
include('fontawesome-6/Brands/FonticonsFi')
```



| Illustration | FonticonsFi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/FonticonsFi.png) | ![illustration for FonticonsFi](../../fontawesome-6/Brands/FonticonsFi.Local.png) |




## FonticonsFi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FonticonsFi
include('fontawesome-6/Brands/FonticonsFi')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FonticonsFi
include('fontawesome-6/Brands/FonticonsFi')

' renders the element
FonticonsFi('FonticonsFi', 'Fonticons Fi', 'an optional tech label', 'an optional description')
@enduml
```

