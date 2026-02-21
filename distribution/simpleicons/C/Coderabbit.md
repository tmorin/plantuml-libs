# Coderabbit


```text
simpleicons/C/Coderabbit
```

```text
include('simpleicons/C/Coderabbit')
```



| Illustration | Coderabbit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Coderabbit.png) | ![illustration for Coderabbit](../../simpleicons/C/Coderabbit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoderabbitXs>`
- `<$CoderabbitSm>`
- `<$CoderabbitMd>`
- `<$CoderabbitLg>`





## Coderabbit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Coderabbit
include('simpleicons/C/Coderabbit')

' renders the element
Coderabbit('Coderabbit', 'Coderabbit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coderabbit
include('simpleicons/C/Coderabbit')

' renders the element
Coderabbit('Coderabbit', 'Coderabbit', 'an optional tech label', 'an optional description')
@enduml
```

