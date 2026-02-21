# Guitarpro


```text
simpleicons/G/Guitarpro
```

```text
include('simpleicons/G/Guitarpro')
```



| Illustration | Guitarpro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Guitarpro.png) | ![illustration for Guitarpro](../../simpleicons/G/Guitarpro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GuitarproXs>`
- `<$GuitarproSm>`
- `<$GuitarproMd>`
- `<$GuitarproLg>`





## Guitarpro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Guitarpro
include('simpleicons/G/Guitarpro')

' renders the element
Guitarpro('Guitarpro', 'Guitarpro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Guitarpro
include('simpleicons/G/Guitarpro')

' renders the element
Guitarpro('Guitarpro', 'Guitarpro', 'an optional tech label', 'an optional description')
@enduml
```

