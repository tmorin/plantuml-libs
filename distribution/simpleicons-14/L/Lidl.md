# Lidl


```text
simpleicons-14/L/Lidl
```

```text
include('simpleicons-14/L/Lidl')
```



| Illustration | Lidl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lidl.png) | ![illustration for Lidl](../../simpleicons-14/L/Lidl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LidlXs>`
- `<$LidlSm>`
- `<$LidlMd>`
- `<$LidlLg>`





## Lidl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lidl
include('simpleicons-14/L/Lidl')

' renders the element
Lidl('Lidl', 'Lidl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lidl
include('simpleicons-14/L/Lidl')

' renders the element
Lidl('Lidl', 'Lidl', 'an optional tech label', 'an optional description')
@enduml
```

