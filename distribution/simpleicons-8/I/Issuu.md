# Issuu


```text
simpleicons-8/I/Issuu
```

```text
include('simpleicons-8/I/Issuu')
```



| Illustration | Issuu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Issuu.png) | ![illustration for Issuu](../../simpleicons-8/I/Issuu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IssuuXs>`
- `<$IssuuSm>`
- `<$IssuuMd>`
- `<$IssuuLg>`





## Issuu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Issuu
include('simpleicons-8/I/Issuu')

' renders the element
Issuu('Issuu', 'Issuu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Issuu
include('simpleicons-8/I/Issuu')

' renders the element
Issuu('Issuu', 'Issuu', 'an optional tech label', 'an optional description')
@enduml
```

