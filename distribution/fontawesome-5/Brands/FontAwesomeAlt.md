# FontAwesomeAlt


```text
fontawesome-5/Brands/FontAwesomeAlt
```

```text
include('fontawesome-5/Brands/FontAwesomeAlt')
```



| Illustration | FontAwesomeAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/FontAwesomeAlt.png) | ![illustration for FontAwesomeAlt](../../fontawesome-5/Brands/FontAwesomeAlt.Local.png) |




## FontAwesomeAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FontAwesomeAlt
include('fontawesome-5/Brands/FontAwesomeAlt')

' renders the element
FontAwesomeAlt('FontAwesomeAlt', 'Font Awesome Alt', 'an optional tech label')
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

' loads the Item which embeds the element FontAwesomeAlt
include('fontawesome-5/Brands/FontAwesomeAlt')

' renders the element
FontAwesomeAlt('FontAwesomeAlt', 'Font Awesome Alt', 'an optional tech label')
@enduml
```

