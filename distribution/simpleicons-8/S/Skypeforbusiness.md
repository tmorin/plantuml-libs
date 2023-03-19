# Skypeforbusiness


```text
simpleicons-8/S/Skypeforbusiness
```

```text
include('simpleicons-8/S/Skypeforbusiness')
```



| Illustration | Skypeforbusiness |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Skypeforbusiness.png) | ![illustration for Skypeforbusiness](../../simpleicons-8/S/Skypeforbusiness.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkypeforbusinessXs>`
- `<$SkypeforbusinessSm>`
- `<$SkypeforbusinessMd>`
- `<$SkypeforbusinessLg>`





## Skypeforbusiness

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Skypeforbusiness
include('simpleicons-8/S/Skypeforbusiness')

' renders the element
Skypeforbusiness('Skypeforbusiness', 'Skypeforbusiness', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Skypeforbusiness
include('simpleicons-8/S/Skypeforbusiness')

' renders the element
Skypeforbusiness('Skypeforbusiness', 'Skypeforbusiness', 'an optional tech label', 'an optional description')
@enduml
```

