# Adn


```text
fontawesome-5/Brands/Adn
```

```text
include('fontawesome-5/Brands/Adn')
```



| Illustration | Adn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Adn.png) | ![illustration for Adn](../../fontawesome-5/Brands/Adn.Local.png) |




## Adn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Adn
include('fontawesome-5/Brands/Adn')

' renders the element
Adn('Adn', 'Adn', 'an optional tech label')
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

' loads the Item which embeds the element Adn
include('fontawesome-5/Brands/Adn')

' renders the element
Adn('Adn', 'Adn', 'an optional tech label')
@enduml
```

