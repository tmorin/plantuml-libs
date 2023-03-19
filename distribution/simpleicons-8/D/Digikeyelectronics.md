# Digikeyelectronics


```text
simpleicons-8/D/Digikeyelectronics
```

```text
include('simpleicons-8/D/Digikeyelectronics')
```



| Illustration | Digikeyelectronics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Digikeyelectronics.png) | ![illustration for Digikeyelectronics](../../simpleicons-8/D/Digikeyelectronics.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Digikeyelectronics
include('simpleicons-8/D/Digikeyelectronics')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Digikeyelectronics
include('simpleicons-8/D/Digikeyelectronics')

' renders the element
Digikeyelectronics('Digikeyelectronics', 'Digikeyelectronics', 'an optional tech label', 'an optional description')
@enduml
```

