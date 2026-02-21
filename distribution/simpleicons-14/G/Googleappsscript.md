# Googleappsscript


```text
simpleicons-14/G/Googleappsscript
```

```text
include('simpleicons-14/G/Googleappsscript')
```



| Illustration | Googleappsscript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googleappsscript.png) | ![illustration for Googleappsscript](../../simpleicons-14/G/Googleappsscript.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleappsscriptXs>`
- `<$GoogleappsscriptSm>`
- `<$GoogleappsscriptMd>`
- `<$GoogleappsscriptLg>`





## Googleappsscript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googleappsscript
include('simpleicons-14/G/Googleappsscript')

' renders the element
Googleappsscript('Googleappsscript', 'Googleappsscript', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googleappsscript
include('simpleicons-14/G/Googleappsscript')

' renders the element
Googleappsscript('Googleappsscript', 'Googleappsscript', 'an optional tech label', 'an optional description')
@enduml
```

