# Knime


```text
simpleicons/K/Knime
```

```text
include('simpleicons/K/Knime')
```



| Illustration | Knime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Knime.png) | ![illustration for Knime](../../simpleicons/K/Knime.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KnimeXs>`
- `<$KnimeSm>`
- `<$KnimeMd>`
- `<$KnimeLg>`





## Knime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Knime
include('simpleicons/K/Knime')

' renders the element
Knime('Knime', 'Knime', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Knime
include('simpleicons/K/Knime')

' renders the element
Knime('Knime', 'Knime', 'an optional tech label', 'an optional description')
@enduml
```

