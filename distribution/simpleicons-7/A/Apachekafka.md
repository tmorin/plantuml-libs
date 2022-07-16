# Apachekafka


```text
simpleicons-7/A/Apachekafka
```

```text
include('simpleicons-7/A/Apachekafka')
```



| Illustration | Apachekafka |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Apachekafka.png) | ![illustration for Apachekafka](../../simpleicons-7/A/Apachekafka.Local.png) |




## Apachekafka

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Apachekafka
include('simpleicons-7/A/Apachekafka')

' renders the element
Apachekafka('Apachekafka', 'Apachekafka', 'an optional tech label')
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

' loads the Item which embeds the element Apachekafka
include('simpleicons-7/A/Apachekafka')

' renders the element
Apachekafka('Apachekafka', 'Apachekafka', 'an optional tech label')
@enduml
```

