# Cocacola


```text
simpleicons-8/C/Cocacola
```

```text
include('simpleicons-8/C/Cocacola')
```



| Illustration | Cocacola |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Cocacola.png) | ![illustration for Cocacola](../../simpleicons-8/C/Cocacola.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CocacolaXs>`
- `<$CocacolaSm>`
- `<$CocacolaMd>`
- `<$CocacolaLg>`





## Cocacola

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Cocacola
include('simpleicons-8/C/Cocacola')

' renders the element
Cocacola('Cocacola', 'Cocacola', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cocacola
include('simpleicons-8/C/Cocacola')

' renders the element
Cocacola('Cocacola', 'Cocacola', 'an optional tech label', 'an optional description')
@enduml
```

