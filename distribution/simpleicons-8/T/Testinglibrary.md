# Testinglibrary


```text
simpleicons-8/T/Testinglibrary
```

```text
include('simpleicons-8/T/Testinglibrary')
```



| Illustration | Testinglibrary |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Testinglibrary.png) | ![illustration for Testinglibrary](../../simpleicons-8/T/Testinglibrary.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TestinglibraryXs>`
- `<$TestinglibrarySm>`
- `<$TestinglibraryMd>`
- `<$TestinglibraryLg>`





## Testinglibrary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Testinglibrary
include('simpleicons-8/T/Testinglibrary')

' renders the element
Testinglibrary('Testinglibrary', 'Testinglibrary', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Testinglibrary
include('simpleicons-8/T/Testinglibrary')

' renders the element
Testinglibrary('Testinglibrary', 'Testinglibrary', 'an optional tech label', 'an optional description')
@enduml
```

