# FonticonsFi


```text
fontawesome-5/Brands/FonticonsFi
```

```text
include('fontawesome-5/Brands/FonticonsFi')
```



| Illustration | FonticonsFi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/FonticonsFi.png) | ![illustration for FonticonsFi](../../fontawesome-5/Brands/FonticonsFi.Local.png) |




## FonticonsFi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FonticonsFi
include('fontawesome-5/Brands/FonticonsFi')

' renders the element
FonticonsFi('FonticonsFi', 'Fonticons Fi', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FonticonsFi
include('fontawesome-5/Brands/FonticonsFi')

' renders the element
FonticonsFi('FonticonsFi', 'Fonticons Fi', 'an optional tech label')
@enduml
```

