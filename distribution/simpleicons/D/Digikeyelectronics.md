# Digikeyelectronics


```text
simpleicons/D/Digikeyelectronics
```

```text
include('simpleicons/D/Digikeyelectronics')
```



| Illustration | Digikeyelectronics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Digikeyelectronics.png) | ![illustration for Digikeyelectronics](../../simpleicons/D/Digikeyelectronics.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DigikeyelectronicsXs>`
- `<$DigikeyelectronicsSm>`
- `<$DigikeyelectronicsMd>`
- `<$DigikeyelectronicsLg>`





## Digikeyelectronics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Digikeyelectronics
include('simpleicons/D/Digikeyelectronics')

' renders the element
Digikeyelectronics('Digikeyelectronics', 'Digikeyelectronics', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Digikeyelectronics
include('simpleicons/D/Digikeyelectronics')

' renders the element
Digikeyelectronics('Digikeyelectronics', 'Digikeyelectronics', 'an optional tech label', 'an optional description')
@enduml
```

