# Codacy


```text
simpleicons-8/C/Codacy
```

```text
include('simpleicons-8/C/Codacy')
```



| Illustration | Codacy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Codacy.png) | ![illustration for Codacy](../../simpleicons-8/C/Codacy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodacyXs>`
- `<$CodacySm>`
- `<$CodacyMd>`
- `<$CodacyLg>`





## Codacy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Codacy
include('simpleicons-8/C/Codacy')

' renders the element
Codacy('Codacy', 'Codacy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codacy
include('simpleicons-8/C/Codacy')

' renders the element
Codacy('Codacy', 'Codacy', 'an optional tech label', 'an optional description')
@enduml
```

