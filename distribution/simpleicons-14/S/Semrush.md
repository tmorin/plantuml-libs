# Semrush


```text
simpleicons-14/S/Semrush
```

```text
include('simpleicons-14/S/Semrush')
```



| Illustration | Semrush |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Semrush.png) | ![illustration for Semrush](../../simpleicons-14/S/Semrush.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SemrushXs>`
- `<$SemrushSm>`
- `<$SemrushMd>`
- `<$SemrushLg>`





## Semrush

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Semrush
include('simpleicons-14/S/Semrush')

' renders the element
Semrush('Semrush', 'Semrush', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Semrush
include('simpleicons-14/S/Semrush')

' renders the element
Semrush('Semrush', 'Semrush', 'an optional tech label', 'an optional description')
@enduml
```

