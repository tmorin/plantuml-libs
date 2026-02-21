# Pearson


```text
simpleicons-14/P/Pearson
```

```text
include('simpleicons-14/P/Pearson')
```



| Illustration | Pearson |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pearson.png) | ![illustration for Pearson](../../simpleicons-14/P/Pearson.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PearsonXs>`
- `<$PearsonSm>`
- `<$PearsonMd>`
- `<$PearsonLg>`





## Pearson

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pearson
include('simpleicons-14/P/Pearson')

' renders the element
Pearson('Pearson', 'Pearson', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pearson
include('simpleicons-14/P/Pearson')

' renders the element
Pearson('Pearson', 'Pearson', 'an optional tech label', 'an optional description')
@enduml
```

