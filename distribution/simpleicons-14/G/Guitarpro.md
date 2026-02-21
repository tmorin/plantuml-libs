# Guitarpro


```text
simpleicons-14/G/Guitarpro
```

```text
include('simpleicons-14/G/Guitarpro')
```



| Illustration | Guitarpro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Guitarpro.png) | ![illustration for Guitarpro](../../simpleicons-14/G/Guitarpro.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Guitarpro
include('simpleicons-14/G/Guitarpro')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Guitarpro
include('simpleicons-14/G/Guitarpro')

' renders the element
Guitarpro('Guitarpro', 'Guitarpro', 'an optional tech label', 'an optional description')
@enduml
```

