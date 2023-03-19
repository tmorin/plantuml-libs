# Pepsi


```text
simpleicons-8/P/Pepsi
```

```text
include('simpleicons-8/P/Pepsi')
```



| Illustration | Pepsi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pepsi.png) | ![illustration for Pepsi](../../simpleicons-8/P/Pepsi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PepsiXs>`
- `<$PepsiSm>`
- `<$PepsiMd>`
- `<$PepsiLg>`





## Pepsi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pepsi
include('simpleicons-8/P/Pepsi')

' renders the element
Pepsi('Pepsi', 'Pepsi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pepsi
include('simpleicons-8/P/Pepsi')

' renders the element
Pepsi('Pepsi', 'Pepsi', 'an optional tech label', 'an optional description')
@enduml
```

