# Penny


```text
simpleicons-8/P/Penny
```

```text
include('simpleicons-8/P/Penny')
```



| Illustration | Penny |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Penny.png) | ![illustration for Penny](../../simpleicons-8/P/Penny.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PennyXs>`
- `<$PennySm>`
- `<$PennyMd>`
- `<$PennyLg>`





## Penny

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Penny
include('simpleicons-8/P/Penny')

' renders the element
Penny('Penny', 'Penny', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Penny
include('simpleicons-8/P/Penny')

' renders the element
Penny('Penny', 'Penny', 'an optional tech label', 'an optional description')
@enduml
```

