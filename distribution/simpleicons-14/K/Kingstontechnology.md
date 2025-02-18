# Kingstontechnology


```text
simpleicons-14/K/Kingstontechnology
```

```text
include('simpleicons-14/K/Kingstontechnology')
```



| Illustration | Kingstontechnology |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kingstontechnology.png) | ![illustration for Kingstontechnology](../../simpleicons-14/K/Kingstontechnology.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KingstontechnologyXs>`
- `<$KingstontechnologySm>`
- `<$KingstontechnologyMd>`
- `<$KingstontechnologyLg>`





## Kingstontechnology

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kingstontechnology
include('simpleicons-14/K/Kingstontechnology')

' renders the element
Kingstontechnology('Kingstontechnology', 'Kingstontechnology', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kingstontechnology
include('simpleicons-14/K/Kingstontechnology')

' renders the element
Kingstontechnology('Kingstontechnology', 'Kingstontechnology', 'an optional tech label', 'an optional description')
@enduml
```

