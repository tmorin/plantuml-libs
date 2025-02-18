# Cloudflarepages


```text
simpleicons-14/C/Cloudflarepages
```

```text
include('simpleicons-14/C/Cloudflarepages')
```



| Illustration | Cloudflarepages |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cloudflarepages.png) | ![illustration for Cloudflarepages](../../simpleicons-14/C/Cloudflarepages.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudflarepagesXs>`
- `<$CloudflarepagesSm>`
- `<$CloudflarepagesMd>`
- `<$CloudflarepagesLg>`





## Cloudflarepages

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cloudflarepages
include('simpleicons-14/C/Cloudflarepages')

' renders the element
Cloudflarepages('Cloudflarepages', 'Cloudflarepages', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cloudflarepages
include('simpleicons-14/C/Cloudflarepages')

' renders the element
Cloudflarepages('Cloudflarepages', 'Cloudflarepages', 'an optional tech label', 'an optional description')
@enduml
```

