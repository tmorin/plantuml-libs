# Instapaper


```text
simpleicons-7/I/Instapaper
```

```text
include('simpleicons-7/I/Instapaper')
```



| Illustration | Instapaper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Instapaper.png) | ![illustration for Instapaper](../../simpleicons-7/I/Instapaper.Local.png) |




## Instapaper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Instapaper
include('simpleicons-7/I/Instapaper')

' renders the element
Instapaper('Instapaper', 'Instapaper', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Instapaper
include('simpleicons-7/I/Instapaper')

' renders the element
Instapaper('Instapaper', 'Instapaper', 'an optional tech label')
@enduml
```

