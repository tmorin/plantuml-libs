# Koc


```text
simpleicons-14/K/Koc
```

```text
include('simpleicons-14/K/Koc')
```



| Illustration | Koc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Koc.png) | ![illustration for Koc](../../simpleicons-14/K/Koc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KocXs>`
- `<$KocSm>`
- `<$KocMd>`
- `<$KocLg>`





## Koc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Koc
include('simpleicons-14/K/Koc')

' renders the element
Koc('Koc', 'Koc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Koc
include('simpleicons-14/K/Koc')

' renders the element
Koc('Koc', 'Koc', 'an optional tech label', 'an optional description')
@enduml
```

