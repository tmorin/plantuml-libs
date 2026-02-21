# Prepbytes


```text
simpleicons-14/P/Prepbytes
```

```text
include('simpleicons-14/P/Prepbytes')
```



| Illustration | Prepbytes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Prepbytes.png) | ![illustration for Prepbytes](../../simpleicons-14/P/Prepbytes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrepbytesXs>`
- `<$PrepbytesSm>`
- `<$PrepbytesMd>`
- `<$PrepbytesLg>`





## Prepbytes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Prepbytes
include('simpleicons-14/P/Prepbytes')

' renders the element
Prepbytes('Prepbytes', 'Prepbytes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Prepbytes
include('simpleicons-14/P/Prepbytes')

' renders the element
Prepbytes('Prepbytes', 'Prepbytes', 'an optional tech label', 'an optional description')
@enduml
```

