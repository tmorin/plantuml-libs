# Materialdesignicons


```text
simpleicons/M/Materialdesignicons
```

```text
include('simpleicons/M/Materialdesignicons')
```



| Illustration | Materialdesignicons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Materialdesignicons.png) | ![illustration for Materialdesignicons](../../simpleicons/M/Materialdesignicons.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaterialdesigniconsXs>`
- `<$MaterialdesigniconsSm>`
- `<$MaterialdesigniconsMd>`
- `<$MaterialdesigniconsLg>`





## Materialdesignicons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Materialdesignicons
include('simpleicons/M/Materialdesignicons')

' renders the element
Materialdesignicons('Materialdesignicons', 'Materialdesignicons', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Materialdesignicons
include('simpleicons/M/Materialdesignicons')

' renders the element
Materialdesignicons('Materialdesignicons', 'Materialdesignicons', 'an optional tech label', 'an optional description')
@enduml
```

