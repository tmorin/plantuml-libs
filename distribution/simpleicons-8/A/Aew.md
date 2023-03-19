# Aew


```text
simpleicons-8/A/Aew
```

```text
include('simpleicons-8/A/Aew')
```



| Illustration | Aew |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Aew.png) | ![illustration for Aew](../../simpleicons-8/A/Aew.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AewXs>`
- `<$AewSm>`
- `<$AewMd>`
- `<$AewLg>`





## Aew

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Aew
include('simpleicons-8/A/Aew')

' renders the element
Aew('Aew', 'Aew', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aew
include('simpleicons-8/A/Aew')

' renders the element
Aew('Aew', 'Aew', 'an optional tech label', 'an optional description')
@enduml
```

