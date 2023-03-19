# Sumologic


```text
simpleicons-8/S/Sumologic
```

```text
include('simpleicons-8/S/Sumologic')
```



| Illustration | Sumologic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sumologic.png) | ![illustration for Sumologic](../../simpleicons-8/S/Sumologic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SumologicXs>`
- `<$SumologicSm>`
- `<$SumologicMd>`
- `<$SumologicLg>`





## Sumologic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sumologic
include('simpleicons-8/S/Sumologic')

' renders the element
Sumologic('Sumologic', 'Sumologic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sumologic
include('simpleicons-8/S/Sumologic')

' renders the element
Sumologic('Sumologic', 'Sumologic', 'an optional tech label', 'an optional description')
@enduml
```

