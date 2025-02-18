# Empirekred


```text
simpleicons-14/E/Empirekred
```

```text
include('simpleicons-14/E/Empirekred')
```



| Illustration | Empirekred |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Empirekred.png) | ![illustration for Empirekred](../../simpleicons-14/E/Empirekred.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmpirekredXs>`
- `<$EmpirekredSm>`
- `<$EmpirekredMd>`
- `<$EmpirekredLg>`





## Empirekred

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Empirekred
include('simpleicons-14/E/Empirekred')

' renders the element
Empirekred('Empirekred', 'Empirekred', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Empirekred
include('simpleicons-14/E/Empirekred')

' renders the element
Empirekred('Empirekred', 'Empirekred', 'an optional tech label', 'an optional description')
@enduml
```

