# Tide


```text
simpleicons-14/T/Tide
```

```text
include('simpleicons-14/T/Tide')
```



| Illustration | Tide |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tide.png) | ![illustration for Tide](../../simpleicons-14/T/Tide.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TideXs>`
- `<$TideSm>`
- `<$TideMd>`
- `<$TideLg>`





## Tide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tide
include('simpleicons-14/T/Tide')

' renders the element
Tide('Tide', 'Tide', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tide
include('simpleicons-14/T/Tide')

' renders the element
Tide('Tide', 'Tide', 'an optional tech label', 'an optional description')
@enduml
```

