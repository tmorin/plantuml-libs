# Blockbench


```text
simpleicons-14/B/Blockbench
```

```text
include('simpleicons-14/B/Blockbench')
```



| Illustration | Blockbench |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Blockbench.png) | ![illustration for Blockbench](../../simpleicons-14/B/Blockbench.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlockbenchXs>`
- `<$BlockbenchSm>`
- `<$BlockbenchMd>`
- `<$BlockbenchLg>`





## Blockbench

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Blockbench
include('simpleicons-14/B/Blockbench')

' renders the element
Blockbench('Blockbench', 'Blockbench', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Blockbench
include('simpleicons-14/B/Blockbench')

' renders the element
Blockbench('Blockbench', 'Blockbench', 'an optional tech label', 'an optional description')
@enduml
```

