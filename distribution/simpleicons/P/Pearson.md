# Pearson


```text
simpleicons/P/Pearson
```

```text
include('simpleicons/P/Pearson')
```



| Illustration | Pearson |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pearson.png) | ![illustration for Pearson](../../simpleicons/P/Pearson.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pearson
include('simpleicons/P/Pearson')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pearson
include('simpleicons/P/Pearson')

' renders the element
Pearson('Pearson', 'Pearson', 'an optional tech label', 'an optional description')
@enduml
```

