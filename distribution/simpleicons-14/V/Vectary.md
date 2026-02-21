# Vectary


```text
simpleicons-14/V/Vectary
```

```text
include('simpleicons-14/V/Vectary')
```



| Illustration | Vectary |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vectary.png) | ![illustration for Vectary](../../simpleicons-14/V/Vectary.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VectaryXs>`
- `<$VectarySm>`
- `<$VectaryMd>`
- `<$VectaryLg>`





## Vectary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vectary
include('simpleicons-14/V/Vectary')

' renders the element
Vectary('Vectary', 'Vectary', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vectary
include('simpleicons-14/V/Vectary')

' renders the element
Vectary('Vectary', 'Vectary', 'an optional tech label', 'an optional description')
@enduml
```

